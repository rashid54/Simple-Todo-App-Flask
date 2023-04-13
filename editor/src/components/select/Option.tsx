import { render } from "@testing-library/react";
import { ReactNode, useEffect, useRef } from "react"
import { JsxElement } from "typescript"

interface Props {
    x: any, 
    render: (x: any)=> ReactNode,
    handleSelection: (x: any)=> void, 
    isSelected: boolean ,
    isFocused: boolean,
}

export const Option = ({x, render, handleSelection, isSelected, isFocused }: Props) => {
    const focusedRef = useRef<HTMLAnchorElement>(null);

    useEffect(()=>{
      isFocused && focusedRef.current?.scrollIntoView({
        block:"center",
      });
    }, [isFocused]);

    // const render = (x: any)=> (
    //   <>
    //     <p style={{margin: "0px"}}>id: {x.id}</p>
    //     <p style={{margin: "0px"}}>first_name: {x.first_name}</p>
    //     <p style={{margin: "0px"}}>last_name: {x.last_name}</p>
    //     <p style={{margin: "0px"}}>gender: {x.gender}</p>
    //     <p style={{margin: "0px"}}>email: {x.email}</p>
    //     {/* <p>ip_address: {props.x.ip_address}</p> */}
    //     {/* <hr 
    //       style={{
    //         width: "80%",
    //         // height: "0px",
    //         margin: "8px auto 0px",
    //         // borderTop: "0px",
    //         // borderBottom: "6px",
    //         // borderStyle: "dotted",
    //         borderColor: "#5D5D5D"
    //       }}
    //     /> */}
    //     </>
    // )
    return (
      <a
        className={`list-group-item list-group-item-action ${isSelected?"active ":""} ${isFocused?"focused ":""}`}
        type="button"
        ref={isFocused?focusedRef:null}
        style={{
          width: "100%",
          cursor: "pointer",
          padding: "10px 15px",
          textAlign: "left"
        }}
        onMouseDown={(e)=>e.preventDefault()}
        onClick={()=>handleSelection(x)}
        tabIndex={-1}
      >
        {render(x)}
      </a>
    )
  }