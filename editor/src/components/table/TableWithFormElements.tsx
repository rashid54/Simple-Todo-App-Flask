import { Pagination, Table } from "react-bootstrap";
import { profiles as initialProfiles } from "../../SampleData";
import { useState } from "react";
import { CustomSelect } from "../select/CustomSelect";

interface Profile {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  status?: string,
  title?: string
}

export const TableWithFormElements = () => {
  const [pageNum, setPageNum] = useState(() => 0);
  const [showEntries, setShowEntries] = useState(() => 10);
  const [profiles, setProfiles] = useState<Profile[]>(() => initialProfiles)
  return (
    <section className="w-100 px-2 d-flex flex-column">
      <Table striped style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "15%" }} >First Name</th>
            <th style={{ width: "15%" }}>Last Name</th>
            <th style={{ width: "35%" }}>Email</th>
            <th style={{ width: "20%" }}>Status</th>
            <th style={{ width: "20%" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            profiles.slice(pageNum * showEntries, (pageNum * showEntries) + showEntries).map((profile) =>
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.first_name}</td>
                <td>{profile.last_name}</td>
                <td>{profile.email}</td>
                <td className="pe-3">
                  <CustomSelect
                    placeholder="Set Status"
                    options={['Active', 'Inactive', 'Disabled']}
                    initialValue={(profile).status}
                    filterByText={
                      (x: any, input: string) => x.toLowerCase().includes(input.toLowerCase())

                    }
                    renderInput={x => x}
                    render={
                      x => <span>{x}</span>
                    }
                    onSelect={(x) => setProfiles(prev => prev.map(i => i.id === profile.id ? { ...profile, status: x } : { ...i }))}
                  />
                </td>
                <td className="pe-3">
                  <CustomSelect
                    placeholder="Set Tilte"
                    options={['Developer', 'Senior Manager', 'Junior Developer', "Trainee"]}
                    initialValue={""}
                    filterByText={
                      (x: any, input: string) => x.toLowerCase().includes(input.toLowerCase())

                    }
                    renderInput={x => x}
                    render={
                      x => <span>{x}</span>
                    }
                  />
                </td>
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