import { useEffect, useRef, useState } from "react"
import "./Select.css"
import { JsxElement } from "typescript";
import { Option } from "./Option";
import {options} from "./SampleData"

export const Select = () => {
    const [toggle, setToggle] = useState(false)
    const [selectedValue, setSelectedValue] = useState<any>(undefined)
    const [inputValue, setInputValue] = useState("")
    const [focusedIndex, setFocusedIndex] = useState(-1)
    const ref = useRef<HTMLDivElement>(null)

    console.log(selectedValue);

    const handleSelection = (x: any) => {
      // setInputValue(x.first_name)
      setSelectedValue(x)
      setToggle(false)
    }


    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
          <div className="mx-2">
            <input
              className="form-control"
              type="text"
              placeholder="Assign To"
              value={toggle||inputValue?inputValue:selectedValue?.first_name}
              style={{ width: "300px" }}
              onClick={(e)=>{setToggle(true)}}
              onFocusCapture={() => setToggle(true)}
              onBlur={() => {
                setInputValue("");
                setToggle(false)
              }}
              onChange={(e) => {
                setInputValue(e.target.value)
                setToggle(true)
              }}
              onKeyDown={(e)=>e.key==="ArrowDown" && ref.current?.focus()}
            />
            {toggle && (
              <div
                className="form-control"
                style={{
                  position: "absolute",
                  zIndex: "20",
                  background: "white",
                  width: "300px",
                  height: "500px",
                  overflowY: "scroll",
                  border: "1px solid #ced4da",
                  padding: "1px 3px",
                  borderRadius: ".375rem",
                  scrollbarWidth: "none"
                }}
              >
                {options
                  .filter((x) => {
                    if (!inputValue) return true
                    if (x.first_name.toLowerCase().includes(inputValue.toLowerCase())) return true
                    return false
                  })
                  .map((x) => {
                    return <Option key={x.id} x={x} handleSelection={handleSelection} isSelected={selectedValue?.id === x.id} />
                  })}
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
  