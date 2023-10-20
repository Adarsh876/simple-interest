import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //js code
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [isPrinciple, setisPrinciple] = useState(true)
  const [isRate, setisRate] = useState(true)
  const [isYear, setisYear] = useState(true)

  const validiteData = (e)=>{
    const {name, value} = e.target
    //console.log(name,value);
    //console.log(value.match(!!/^[0-9]+$/)); // !! - convert to boolean
    //setPrinciple(value)
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='principle')
      {
        setPrinciple(value)
        setisPrinciple(true)
      }
      else if(name==='rate'){
        setRate(value)
        setisRate(true)
        
      }
      else{
        setYear(value)
        setisYear(true)
      }
    }
    else{
      if(name=='principle')
      {
        setPrinciple(value)
        setisPrinciple(false)
      }
      else if(name==='rate'){
        setRate(value)
        setisRate(false)
      }
      else{
        setYear(value)
        setisYear(false)
      }
    }
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert('please fill the form completely')
    }
    else{
      //alert('submitted')
      setInterest(principle*rate*year/100)
    }

  }

  const handleReset = (e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)

  }
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark ' >
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>
          Calculate your simple interest easily</p>

          <div className='bg-warning mt-5 d-flex justify-content-center align-items-center w-100 shadow'>
            <h1>₹{' '} {interest}</h1>
            <p>Total simple interest</p>

          </div>
          <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mt-3'>
          <TextField name='principle' value={principle || ""} onChange={(e)=>validiteData(e)} className='w-100' id="outlined-basic" label="Principal" variant="outlined" />
          </div>

          { !isPrinciple &&
            <div>
            <p className='target-danger fw-bolder'>Invalid Input</p>
          </div>
          }

          <div className='mt-3'>
          <TextField name='rate' value={rate || ""} onChange={(e)=>validiteData(e)} className='w-100' id="outlined-basic" label="Rate of Interest" variant="outlined" />
          </div>

          { 
          !isRate &&
            <div>
            <p className='target-danger fw-bolder'>Invalid Input</p>
          </div>
          }
          <div className='mb-3 mt-3'>
          <TextField name='year'  onChange={(e)=>validiteData(e)} value={year || ""} className='w-100' id="outlined-basic" label="Year(yr)" variant="outlined" />
          </div>

          { 
          !isYear &&
            <div>
            <p className='target-danger fw-bolder'>Invalid Input</p>
          </div>
          }

        </form>
        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={isPrinciple && isRate && isYear ?false:true} style={{height:'60px',width:'200px'}} variant="contained" className='bg-dark'>Calculate</Button>
        <Button onClick={handleReset} style={{height:'60px',width:'200px'}} variant="outlined">Reset</Button>
  
        </Stack>
        </div>
        
    </div>
  );
}

export default App;
