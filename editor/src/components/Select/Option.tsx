import { useEffect, useRef } from "react"
import { JsxElement } from "typescript"

interface Props {
    x: any, 
    handleSelection: (x: any)=> void, 
    isSelected: boolean ,
    isFocused: boolean,
}

export const Option = ({x, handleSelection, isSelected, isFocused }: Props) => {
    const focusedRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      isFocused && focusedRef.current?.scrollIntoView({
        block:"center",
      });
    }, [isFocused])
    return (
      <div
        className={`rounded option ${isSelected?"selected":""} ${isFocused?"focused":""}`}
        ref={isFocused?focusedRef:null}
        style={{
          width: "300px",
          cursor: "pointer",
          padding: "10px 15px",
          textAlign: "left"
        }}
        onMouseDown={(e)=>e.preventDefault()}
        onClick={()=>handleSelection(x)}
        tabIndex={-1}
      >
        <p style={{margin: "0px"}}>id: {x.id}</p>
        <p style={{margin: "0px"}}>first_name: {x.first_name}</p>
        <p style={{margin: "0px"}}>last_name: {x.last_name}</p>
        <p style={{margin: "0px"}}>gender: {x.gender}</p>
        <p style={{margin: "0px"}}>email: {x.email}</p>
        {/* <p>ip_address: {props.x.ip_address}</p> */}
        <hr 
          style={{
            width: "80%",
            // height: "0px",
            margin: "8px auto 0px",
            // borderTop: "0px",
            // borderBottom: "6px",
            // borderStyle: "dotted",
            borderColor: "#5D5D5D"
          }}
        />
      </div>
    )
  }