import React, { useRef, useState } from "react";
import { Switch, InputNumber, Tooltip } from "antd";

import AuthCode, { AuthCodeRef, AuthCodeProps } from "react-auth-code-input";
import "./index.css";

const allowedCharactersMap = [
  { id: "alphanumeric", name: "Letters & Numbers" },
  { id: "alpha", name: "Only Letters" },
  { id: "numeric", name: "Only Numbers" },
];

const App = () => {
  const AuthInputRef = useRef<AuthCodeRef>(null);
  const [result, setResult] = useState<string>("");
  const [length, setLength] = useState<any>();
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [allowedCharacters, setAllowedCharacters] =
    useState<AuthCodeProps["allowedCharacters"]>("alphanumeric");
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  const handleAllowedCharactersChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id } = e.currentTarget;
    // @ts-ignore
    setAllowedCharacters(id);
    setResult("");
  };

  const defaultValue = 6;
  const onChange = (value: number | null) => {
    setLength(value);
    if (value === null) {
      setLength(defaultValue);
    }
  };

  return (
    <div className="main">
      <h1>Auth Code Input</h1>
      <div>
        <div>
          <AuthCode
            key={allowedCharacters}
            allowedCharacters={allowedCharacters}
            ref={AuthInputRef}
            onChange={handleOnChange}
            containerClassName="container"
            inputClassName="input"
            isPassword={isPassword}
            disabled={false}
            length={length}
          />

          <p>Code: {result}</p>
          <div className="props">
            <div className="options">
              <div>
                <Switch
                  checked={isPassword}
                  checkedChildren="Show"
                  unCheckedChildren="Hide"
                  onChange={() => {
                    setIsPassword(!isPassword);
                  }}
                />
              </div>
              <div>
                <Tooltip placement="top" title={"Code length"}>
                  <InputNumber
                    min={6}
                    max={10}
                    defaultValue={6}
                    bordered={true}
                    onChange={onChange}
                  />
                </Tooltip>
              </div>
              <button onClick={() => AuthInputRef.current?.focus()}>
                Focus
              </button>
              <button onClick={() => AuthInputRef.current?.clear()}>
                Clear
              </button>
            </div>
            <div className="allowed-characters">
              {allowedCharactersMap.map((aC) => (
                <div key={aC.id}>
                  <input
                    type="radio"
                    id={aC.id}
                    name="allowedRadio"
                    onChange={handleAllowedCharactersChange}
                    checked={allowedCharacters === aC.id}
                  />
                  <label htmlFor={aC.id}>{aC.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
