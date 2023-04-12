import { ReactNode, useEffect, useRef, useState } from "react"
import "./CustomSelect.css"
import { Option } from "./Option";
// import {profiles as options} from "../../SampleData"

interface Props {
  render: (x: any)=> ReactNode,
  options: any[],
  filterByText: (x: any, input: string)=> boolean,
}

export const CustomSelect = ({render, options, filterByText}: Props) => {
    const [toggle, setToggle] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(()=>options);
    const [selectedValue, setSelectedValue] = useState<any>(undefined);
    const [inputValue, setInputValue] = useState("");
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const resetValues = ()=>{
      setInputValue("");
      setToggle(false);
      setFocusedIndex(-1);
    }

    const handleSelection = (x: any) => {
      setSelectedValue(x);
      resetValues();
    }

    const handleChange = (newInput: string) => {
      // const newFilteredOptions = options.filter((x) => (x.first_name.toLowerCase().includes(newInput.toLowerCase()) || (!newInput)));
      // setFilteredOptions(()=> newFilteredOptions);
      setInputValue(newInput);
      setToggle(true);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
      let nextIndexCount = 0;
  
      // move down
      if (e.key === "ArrowDown")
        nextIndexCount = (focusedIndex + 1) % filteredOptions.length;
  
      // move up
      if (e.key === "ArrowUp")
        nextIndexCount = (focusedIndex + filteredOptions.length - 1) % filteredOptions.length;
  
      // hide search results
      if (e.key === "Escape") {
        resetValues();
      }
  
      // select the current item
      if (e.key === "Enter") {
        e.preventDefault();
        handleSelection(filteredOptions[focusedIndex]);
      }
  
      setFocusedIndex(nextIndexCount);
    };

    useEffect(
      ()=>setFilteredOptions(options.filter((x) => filterByText(x, inputValue) || (!inputValue))),
      [inputValue,]
    );
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
          <div className="mx-2"
            tabIndex={-1}
            onFocusCapture={() => setToggle(true)}
            onBlur={resetValues}
            onKeyDown={handleKeyDown}
          >
            <input
              className={`form-control ${selectedValue?"bg-secondary-subtle":""}`}
              type="text"
              placeholder="Assign To"
              value={toggle||inputValue?inputValue:(selectedValue?.first_name || selectedValue)}
              style={{ width: "100%" }}
              onClick={(e)=>{setToggle(true)}}
              onChange={(e)=> handleChange(e.target.value)}
            />
            {toggle && (
              <div
                className="list-group list-group-flush bg-light"
                style={{
                  position: "absolute",
                  zIndex: "20",
                  width: "300px",
                  maxHeight: "500px",
                  overflowY: "auto",
                  border: "1px solid #ced4da",
                  padding: "1px 3px",
                  borderRadius: ".375rem",
                  scrollbarWidth: "none",
                }}
              >
                {filteredOptions.map((x, index) => {
                    return <Option 
                      key={x.id || index} 
                      x={x} 
                      render={render}
                      handleSelection={handleSelection} 
                      isSelected={(x.id && selectedValue?.id === x.id) || selectedValue === x} 
                      isFocused={index === focusedIndex}
                    />
                  })}
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
  