import { renderHook } from "@testing-library/react";
import { act } from "react";
import { vi } from "vitest";
import { PLAYER } from "../../../src/core/interfaces";
import React from 'react';
import '@testing-library/jest-dom';
import { GameContext } from '../../../src/app/state/GameContext'
import { useGameContext } from '../../../src/core/hooks/useGameContext'
import { dropToken, resetGame } from "../../../src/app/state/board/actions";
import { IState } from "../../../src/core/interfaces/state";

vi.mock(import("../../../src/app/state/board/actions"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    dropToken: vi.fn(),
    resetGame: vi.fn(),
  }
})

const initialState = {
  board: Array(6).fill(Array(7).fill(null)),
  currentPlayer: PLAYER.PLAYER1,
  winner: null,
  isDraw: false,
  isDropping: false,
};

const player1Board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, PLAYER.PLAYER1, null, null, null],
  [null, null, null, PLAYER.PLAYER1, PLAYER.PLAYER2, null, null],
  [null, null, null, PLAYER.PLAYER1, PLAYER.PLAYER2, null, null],
  [null, null, null, PLAYER.PLAYER1, PLAYER.PLAYER2, null, null],
];

const drawBoard = [
  [PLAYER.PLAYER2, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
  [PLAYER.PLAYER2, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1],
  [PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER2, PLAYER.PLAYER1],
  [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
  [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
  [PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2, PLAYER.PLAYER2, PLAYER.PLAYER1, PLAYER.PLAYER2],
];

const wrapper = ({ children }) => (
  <GameContext.Provider value={{
    state: initialState,
    dispatch: vi.fn(),
  }}>
    {children}
  </GameContext.Provider>
);

describe('useGameContext', () => {
  it('should call dropToken when handleDrop is called and no winner or draw exists', () => {
    const { result } = renderHook(() => useGameContext(), { wrapper });

    act(() => {
      result.current.handleDrop(0);
    });

    expect(dropToken).toHaveBeenCalledWith(0);
    expect(result.current.state.winner).toBeNull();
    expect(result.current.state.isDraw).toBe(false);
  });

  it('should not call dropToken if there is already a winner', () => {
    const winnerState: IState = {
      ...initialState,
      winner: PLAYER.PLAYER1,
      board: player1Board,
      isDraw: false,
    };

    const mockDispatch = vi.fn();

    const wrapperWithWinner = ({ children }) => (
      <GameContext.Provider value={{
        state: winnerState,
        dispatch: mockDispatch,
      }}>
        {children}
      </GameContext.Provider>
    );

    const { result } = renderHook(() => useGameContext(), { wrapper: wrapperWithWinner });

    act(() => {
      result.current.handleDrop(1);
    });

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();
    expect(result.current.state.board).toEqual(player1Board);
    expect(result.current.state.winner).toBe(PLAYER.PLAYER1);
  });

  it('should not call dropToken if there is already a draw', () => {
    const drawState: IState = {
      ...initialState,
      board: drawBoard,
      isDraw: true,
      winner: null,
    };
  
    const mockDispatch = vi.fn();
  
    const wrapperWithDraw = ({ children }) => (
      <GameContext.Provider value={{
        state: drawState,
        dispatch: mockDispatch,
      }}>
        {children}
      </GameContext.Provider>
    );
  
    const { result } = renderHook(() => useGameContext(), { wrapper: wrapperWithDraw });
  
    act(() => {
      result.current.handleDrop(0);
    });
  
    expect(mockDispatch).not.toHaveBeenCalled();
  
    expect(result.current.state.board).toEqual(drawState.board);
  
    expect(result.current.state.isDraw).toBe(true);
  });

  it('should call resetGame when handleReset is called', () => {
    const { result } = renderHook(() => useGameContext(), { wrapper });

    act(() => {
      result.current.handleReset();
    });

    expect(resetGame).toHaveBeenCalled();
    expect(resetGame).toHaveBeenCalledTimes(1);
  });

  it('should detect a draw when the board is full and there is no winner', () => {
    const drawState = {
      ...initialState,
      board: Array(6).fill(Array(7).fill(PLAYER.PLAYER1)),
      isDraw: true,
    };

    const wrapperWithDraw = ({ children }) => (
      <GameContext.Provider value={{
        state: drawState,
        dispatch: vi.fn(),
      }}>
        {children}
      </GameContext.Provider>
    );

    const { result } = renderHook(() => useGameContext(), { wrapper: wrapperWithDraw });

    expect(result.current.state.isDraw).toBe(true);
    expect(result.current.state.winner).toBeNull();
  });

  it('should identify the winner when someone wins', () => {
    const winState = {
      ...initialState,
      board: player1Board,
      winner: PLAYER.PLAYER1,
    };

    const wrapperWithWinner = ({ children }) => (
      <GameContext.Provider value={{
        state: winState,
        dispatch: vi.fn(),
      }}>
        {children}
      </GameContext.Provider>
    );

    const { result } = renderHook(() => useGameContext(), { wrapper: wrapperWithWinner });

    expect(result.current.state.winner).toBe(PLAYER.PLAYER1);
    expect(result.current.state.isDraw).toBe(false);
  });
});
