import { SecurityUpdateGoodSharp } from "@mui/icons-material";
import { paginationItemClasses } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));





export const Home = ()=>{

    const [data,setData] = useState([]);
    const [gender,setGender] = useState("")
    const [age,setAge] = useState(0)
    const [page,setPage] = useState(1)
const navigate = useNavigate();
  useEffect(()=>{
    GetData()
  },[gender,page,age])
  const store = useSelector((store)=>store.teacher.teacher);


    const GetData = ()=>{

         axios.get(`https://school-admin-suresh.herokuapp.com/teacher?gender=${gender}&page=${page}&sort=${age}`).then((res)=>{
             setData(res.data)
         })
    }
    //console.log(data)

    const genderFilter = (value)=>{
             
        setGender(value)

    }
    const ageFilter = (value)=>{
             
        setAge(value)

    }
    console.log(age);
    return(

        <div id="maindiv">
            <div id="leftdiv">
            <div>
                {/* <button onClick={()=>genderFilter("male")}>Male</button>
                <button onClick={()=>genderFilter("female")}>Feamle</button> */}
                


    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
       
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" onClick={()=>genderFilter("female")} control={<Radio />} label="Female" />
        <FormControlLabel value="male" onClick={()=>genderFilter("male")} control={<Radio />} label="Male" />
        
        
      </RadioGroup>


      <FormLabel id="demo-radio-buttons-group-label">Age</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
       
        name="radio-buttons-group"
      >
        <FormControlLabel value={1} onClick={()=>ageFilter(1)} control={<Radio />} label="Ascending" />
        <FormControlLabel value={-1} onClick={()=>ageFilter(-1)} control={<Radio />} label="Desending" />
        
        
      </RadioGroup>
    </FormControl>
  

            </div>
          
          </div>
           
          





      <div id="rightdiv">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>IMAGE</StyledTableCell>
            {/* <StyledTableCell align="right">IMAGE</StyledTableCell> */}
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">AGE</StyledTableCell>
            <StyledTableCell align="right">GENDER</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
               <img src={row.Image} alt="" />
              </StyledTableCell>
              <StyledTableCell  align="right"><button id="btn1"onClick={()=>navigate(`/class/${row._id}`)}>{row.Name}</button></StyledTableCell>
              <StyledTableCell  align="right">{row.Age}</StyledTableCell>
              <StyledTableCell  align="right">{row.Gender}</StyledTableCell>
              <StyledTableCell  align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   

            <div id="paginate">
              <button className="page" disabled={page==1} onClick={()=>setPage(page-1)}>prev</button>
              <button className="page" onClick={()=>setPage(page+1)}>next</button>
          </div>
  
          </div>
        </div>
    )
}