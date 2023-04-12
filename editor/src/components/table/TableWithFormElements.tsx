import { Pagination, Table } from "react-bootstrap";
import { profiles } from "../../SampleData";
import { useState } from "react";
import { CustomSelect } from "../select/CustomSelect";

export const TableWithFormElements = () => {
  const [pageNum, setPageNum] = useState(() => 0);
  const [showEntries, setShowEntries] = useState(() => 10);

  const render = (x: any) => (
    <>
      <p style={{ margin: "0px" }}>id: {x.id}</p>
      <p style={{ margin: "0px" }}>first_name: {x.first_name}</p>
      <p style={{ margin: "0px" }}>last_name: {x.last_name}</p>
      <p style={{ margin: "0px" }}>gender: {x.gender}</p>
      <p style={{ margin: "0px" }}>email: {x.email}</p>
      {/* <p>ip_address: {props.x.ip_address}</p> */}
      {/* <hr 
        style={{
          width: "80%",
          // height: "0px",
          margin: "8px auto 0px",
          // borderTop: "0px",
          // borderBottom: "6px",
          // borderStyle: "dotted",
          borderColor: "#5D5D5D"
        }}
      /> */}
    </>
  )
  const filter = (x: any, inputValue: string) => x.first_name.toLowerCase().includes(inputValue.toLowerCase())
  return (
    <section className="w-100 px-2 d-flex flex-column">
      <Table striped style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "15%" }} >First Name</th>
            <th style={{ width: "15%" }}>Last Name</th>
            <th style={{ width: "30%" }}>Email</th>
            <th style={{ width: "20%" }}>Status</th>
            <th style={{ width: "20%" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            profiles.slice(pageNum * showEntries, (pageNum * showEntries) + showEntries).map((profile) =>
              <tr>
                <td>{profile.id}</td>
                <td>{profile.first_name}</td>
                <td>{profile.last_name}</td>
                <td>{profile.email}</td>
                <td>
                  <CustomSelect
                    options={['Active', 'Inactive', 'Disabled']}
                    filterByText={
                      (x:any, input:string) => x.toLowerCase().includes(input.toLowerCase())
                      
                    }
                    render={
                      x => <p>{x}</p>
                    }
                  /></td>
                <td><CustomSelect render={render} options={profiles} filterByText={filter} /></td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <Pagination className="ms-auto me-4">
        {
          [...(Array(Math.floor((profiles.length + showEntries - 1) / showEntries)).keys())].map((index) =>
            <Pagination.Item key={index} active={index === pageNum} onClick={() => setPageNum(index)}>
              {index + 1}
            </Pagination.Item>)
        }
      </Pagination>
    </section>
  );
}