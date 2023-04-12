import { Pagination, Table } from "react-bootstrap";
import { profiles } from "../../SampleData";
import { useState } from "react";

export const PaginatedTable = () => {
  const [pageNum, setPageNum] = useState(()=>0);
  const [showEntries, setShowEntries] = useState(()=> 10);
  return (
    <>
      <Table striped style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "25%" }} >First Name</th>
            <th style={{ width: "25%" }}>Last Name</th>
            <th style={{ width: "40%" }}>Email</th>
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
    </>
  );
}