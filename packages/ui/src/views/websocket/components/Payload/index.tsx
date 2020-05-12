import React, { useContext, useState, useCallback } from 'react';
import './payload.scss';
import Control, { Header } from 'components/Control';
import Button from 'components/Button';
import TextEditor, { EditorMode } from 'components/TextEditor';
import WebSocketContext, { IWebSocketContext } from '../../context/websocket';
import PayloadType from './PayloadType';


const INITIAL_VALUE = 'Hello World';

function Payload(): JSX.Element {
  const { send, isConnected } = useContext<IWebSocketContext>(WebSocketContext);
  const [value, setValue] = useState<string>(INITIAL_VALUE);

  const [currentMode] = useState<EditorMode>('text');

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    send(value);
  }, [value, send]);

  const handleChange = useCallback((nextValue: string): void => {
    setValue(nextValue);
  }, [setValue]);

  return (
    <Control id="ws-payload">
      <Header title="Payload">
        <PayloadType />
      </Header>
      <form id="payload-form" onSubmit={handleSubmit}>
        <TextEditor mode={currentMode} value={value} onChange={handleChange} />
        <Button
          id="button"
          text="Send"
          type="submit"
          intent="primary"
          disabled={!isConnected}
        />
      </form>
    </Control>
  );
}

export default Payload;
