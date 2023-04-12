import { Pagination, Table } from "react-bootstrap";
import { FormPage } from "./FormPage";
import { profiles } from "../SampleData";
import { useState } from "react";
import { PaginatedTable } from "../components/table/PaginatedTable";


export const Profiles = () => {
  return (
    <div className="d-flex">
      <section className="w-50 px-2">
        <FormPage />
      </section>
      <section className="w-50 px-2 d-flex flex-column">
        <h4 className="text-center">List of Profiles</h4>
        <PaginatedTable />
      </section>
    </div>
  );
}