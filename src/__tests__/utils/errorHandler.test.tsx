import { displayError } from "../../utils/errorHandler";

describe('displayError', () => {
  it('should set the error message to an empty string and set server error when status is "FETCH_ERROR"', () => {
    // Arrange
    const setStatusMock = jest.fn();
    const setErrorMock = jest.fn();
    const status = 'FETCH_ERROR';
    const message = 'Some error message';

    // Act
    displayError(status, setErrorMock, message);

    // Assert
    expect(setErrorMock).toHaveBeenCalledTimes(2);
    expect(setErrorMock).toHaveBeenCalledWith('');
    expect(setErrorMock).toHaveBeenCalledWith('Server Error! ');
  });

  it('should set the error message to the provided message when status is not "FETCH_ERROR"', () => {
    // Arrange
    const setStatusMock = jest.fn();
    const setErrorMock = jest.fn();
    const status = 'SOME_OTHER_STATUS';
    const message = 'Some error message';

    // Act
    displayError(status, setErrorMock, message);

    // Assert
    expect(setErrorMock).toHaveBeenCalledTimes(2);
    expect(setErrorMock).toHaveBeenCalledWith('');
    expect(setErrorMock).toHaveBeenCalledWith(message);
  });
});