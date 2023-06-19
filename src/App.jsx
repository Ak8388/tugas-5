import Pants from './components/Pants'
import {useState} from 'react'
import {GrAdd} from "react-icons/gr"
import {TbArrowsMaximize} from "react-icons/tb"
import {TbArrowsMinimize} from "react-icons/tb"
import {AiOutlineMinus} from "react-icons/ai"
import "./App.css"

const valuePants = [
  {
    id:1,
    name:'Short Pants',
    size:30
  },
  {
    id:2,
    name:'Long Pants',
    size:25
  },
  {
    id:3,
    name:'Swiming Pants',
    size:29
  }
]

function App() {
  const [temp,setTemp] = useState({
    id:0,
    name:"",
    size:0
  })

  const [str,setStr]=useState([{}])

  const [pants,setPants]= useState(valuePants)

  const tmbhBlakang = () =>{
    setPants([
        ...pants,
      {
        id:temp.id,
        name:temp.name,
        size:temp.size
      }
    ])
  }

  const tmbhDpn = () =>{
    setPants([
      {
        id:temp.id,
        name:temp.name,
        size:temp.size
      },
        ...pants
    ])
  }

  const Edit = (e) =>{
    setPants(pants.map((value)=>{
      if(temp.id === value.id){
        return{
          ...value,
          name:e.target.value
        }
      }else{
        return {
          ...value
        }
      }
    }))
  }

  const besar = () =>{
    setPants(pants.map((value) => {
      if(temp.id === value.id){
        return{
          ...value,
          size:value.size+1
        }
      }else{
        return value
      }  
    }))
  }

  const kecil = () =>{
    setPants(pants.map((value) => {
      if(temp.id===value.id){
        return{
          ...value,
          size:value.size-1
        }
      }else{
        return value
      }  
    }))
  }

  const hapus = () => {
    setPants(pants.filter((value) => value.id != temp.id))
  }

  const hpsdpn = () =>{
    const arrSlice = pants.slice(1,pants.length+1)
    setPants(arrSlice)
  }

  const hpsBlkng = () =>{
    const arrSlice = pants.slice(0,pants.length-1)
    setPants(arrSlice)
  }

  return (
    <div id='container'>
      <div>
        {
          pants.map((value,index)=>{
            return <Pants key={index} name={value.name} sz={value.size}/>
          })
        }
      </div>
      <div id='tambah'>
        <h1>Tambah</h1>
        <input type="number" placeholder='ID' onChange={(e)=>{
          setTemp({
            ...temp,
            id:e.target.value
          })
          }}/>
        <input type="text" placeholder='Name' onChange={(e)=>{
          setTemp({
            ...temp,
            name:e.target.value
          })
        }}/>
        <input type="number" placeholder='Size' onChange={(e)=>{
          setTemp({
            ...temp,
            size:e.target.value
          })
        }}/>
        <div id='btn'>
          <button onClick={tmbhDpn}><GrAdd/>Depan</button>
          <button onClick={tmbhBlakang}><GrAdd/>Blakang</button>
        </div>
      </div>
      <div id='edit'>
        <h2>Edit/Hapus Berdasarkan ID</h2>
        <input type="number" value={temp.id} placeholder='ID' onChange={(e)=>setTemp({
          ...temp,
          id:parseInt(e.target.value),
        })}/>
        <input type="input" value={str[0].name} placeholder='Name' onChange={Edit}/>
        <p>Size :</p>
        <div id='btnsz'>
          <button className='sz' onClick={besar}><TbArrowsMaximize/>Perbesar</button>
          <button className='sz' onClick={kecil}><TbArrowsMinimize/>Perkecil</button>
        </div>
        <button id='btnhps' onClick={hapus}>Hapus</button>
      </div>
      <div id='hps'>
        <h1>Hapus</h1>
        <div id='btnsz'>
          <button className='sz' onClick={hpsdpn}><AiOutlineMinus/>Depan</button>
          <button className='sz' onClick={hpsBlkng}><AiOutlineMinus/>Blakang</button>
        </div>
        <button id='btnhps' onClick={()=>setPants([])}>Semua</button>
      </div>
    </div>
  )
}

export default App
