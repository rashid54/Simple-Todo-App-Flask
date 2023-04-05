import { useEffect, useRef, useState } from "react"

const options = [
    {
      id: 1,
      first_name: "Rianon",
      last_name: "De La Salle",
      email: "rdelasalle0@joomla.org",
      gender: "Female",
      ip_address: "186.7.39.152"
    },
    {
      id: 2,
      first_name: "Phil",
      last_name: "Oolahan",
      email: "poolahan1@huffingtonpost.com",
      gender: "Female",
      ip_address: "58.88.85.228"
    },
    {
      id: 3,
      first_name: "Teodoro",
      last_name: "Rickford",
      email: "trickford2@elegantthemes.com",
      gender: "Male",
      ip_address: "127.132.46.118"
    },
    {
      id: 4,
      first_name: "Davy",
      last_name: "Salazar",
      email: "dsalazar3@istockphoto.com",
      gender: "Male",
      ip_address: "60.191.41.244"
    },
    {
      id: 5,
      first_name: "Mitch",
      last_name: "Barensen",
      email: "mbarensen4@go.com",
      gender: "Non-binary",
      ip_address: "162.155.254.121"
    },
    {
      id: 6,
      first_name: "Ester",
      last_name: "Maria",
      email: "emaria5@drupal.org",
      gender: "Genderqueer",
      ip_address: "171.94.49.110"
    },
    {
      id: 7,
      first_name: "Francine",
      last_name: "Tilliard",
      email: "ftilliard6@opensource.org",
      gender: "Female",
      ip_address: "92.171.118.193"
    },
    {
      id: 8,
      first_name: "Octavius",
      last_name: "Cohani",
      email: "ocohani7@comcast.net",
      gender: "Genderqueer",
      ip_address: "227.175.87.95"
    },
    {
      id: 9,
      first_name: "Esma",
      last_name: "Brahmer",
      email: "ebrahmer8@csmonitor.com",
      gender: "Female",
      ip_address: "209.128.96.181"
    },
    {
      id: 10,
      first_name: "Florina",
      last_name: "Zelland",
      email: "fzelland9@blogspot.com",
      gender: "Female",
      ip_address: "236.71.213.94"
    },
    {
      id: 11,
      first_name: "Genvieve",
      last_name: "Barnsley",
      email: "gbarnsleya@microsoft.com",
      gender: "Female",
      ip_address: "133.138.110.252"
    },
    {
      id: 12,
      first_name: "Josefa",
      last_name: "Lamburne",
      email: "jlamburneb@domainmarket.com",
      gender: "Female",
      ip_address: "236.29.35.124"
    },
    {
      id: 13,
      first_name: "Reggie",
      last_name: "Spilling",
      email: "rspillingc@smugmug.com",
      gender: "Male",
      ip_address: "143.3.116.187"
    },
    {
      id: 14,
      first_name: "Elsi",
      last_name: "Janos",
      email: "ejanosd@howstuffworks.com",
      gender: "Female",
      ip_address: "241.220.139.151"
    },
    {
      id: 15,
      first_name: "Elene",
      last_name: "Espinosa",
      email: "eespinosae@blinklist.com",
      gender: "Female",
      ip_address: "0.132.202.128"
    },
    {
      id: 16,
      first_name: "Esteban",
      last_name: "Kemston",
      email: "ekemstonf@weather.com",
      gender: "Male",
      ip_address: "238.160.234.67"
    },
    {
      id: 17,
      first_name: "Bobbi",
      last_name: "Skeat",
      email: "bskeatg@umich.edu",
      gender: "Female",
      ip_address: "70.247.61.232"
    },
    {
      id: 18,
      first_name: "Chandra",
      last_name: "Esch",
      email: "ceschh@merriam-webster.com",
      gender: "Female",
      ip_address: "141.192.254.87"
    },
    {
      id: 19,
      first_name: "Ame",
      last_name: "Lafee",
      email: "alafeei@slate.com",
      gender: "Female",
      ip_address: "3.211.62.93"
    },
    {
      id: 20,
      first_name: "Dennet",
      last_name: "Hawkswood",
      email: "dhawkswoodj@unc.edu",
      gender: "Male",
      ip_address: "102.153.207.131"
    }
  ]
  
  const Option = (props: { x: any; setSelectedValue: (x: any) => void; setToggle: (x: boolean) => void }) => {
    return (
      <div
        style={{
          width: "300px",
          lineHeight: "16px",
          cursor: "pointer",
          padding: "10px 15px",
          textAlign: "left"
        }}
        onClick={() => {
          props.setSelectedValue(props.x)
          props.setToggle(false)
        }}
      >
        <p>id: {props.x.id}</p>
        <p>first_name: {props.x.first_name}</p>
        <p>last_name: {props.x.last_name}</p>
        <p>gender: {props.x.gender}</p>
        <p>email: {props.x.email}</p>
        {/* <p>ip_address: {props.x.ip_address}</p> */}
        <hr 
          style={{
            width: "80%",
            height: "0px",
            margin: "0px auto",
            borderTop: "0px",
            borderBottom: "6px",
            borderStyle: "dotted",
            borderColor: "#5D5D5D"
          }}
        />
      </div>
    )
  }

export const Select = () => {
    const [toggle, setToggle] = useState(false)
    const [selectedValue, setSelectedValue] = useState<any>(undefined)
    const [inputValue, setInputValue] = useState("")
    const inputTextRef = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      setInputValue(selectedValue?.first_name || "")
      if (inputTextRef && inputTextRef.current && inputTextRef.current.value) {
        inputTextRef.current.value = selectedValue?.first_name || ""
      }
    }, [selectedValue])
  
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
          <div className="mx-2">
            <input
              className="form-control"
              type="text"
              ref={inputTextRef}
              style={{ width: "300px" }}
              onClick={()=>setToggle(true)}
            //   onFocusCapture={() => setToggle(true)}
            //   onBlurCapture={() => setToggle(false)}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
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
                  scrollbarWidth: "thin"
                }}
              >
                {options
                  .filter((x) => {
                    if (!inputValue) return true
                    if (x.first_name.includes(inputValue)) return true
                    return false
                  })
                  .map((x, i) => {
                    return <Option key={i} x={x} setSelectedValue={setSelectedValue} setToggle={setToggle} />
                  })}
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
  