import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, roll }) {
  return (
    <button className="d6-button" type="button" onClick={roll}>
      <D6 value={value} />
    </button>
  );
}
