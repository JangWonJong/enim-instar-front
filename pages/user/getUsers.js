import axios from 'axios'
import { useState, useEffect } from 'react'
import tableStyles from '../common/style/table.module.css'

const Table = ({columns, colspan, data })  =>{
        return(
        <table className={tableStyles.table}>
            <thead>
            {/*columns.map((x)=>{x})*/}
            <tr>
            {columns.map((column)=>(
                <th key = {column.userid}>{column}</th>
            ))}
            </tr>
            </thead>
            <tbody>
                { data.length == 0 ?<tr>
                                    <td colSpan={colspan}>NO DATA</td>
                                    </tr>
                                    :data.map((user) => (
                                        <tr  key={user.userid} >
                                          <td >{user.userid}</td>
                                          <td >{user.name}</td>
                                          <td >{user.email}</td>
                                          <td >{user.phone}</td>
                                          <td >{user.birth}</td>
                                          <td >{user.address}</td>
                                        </tr>

                                    ))}               
             </tbody>
        </table>
    )
}

export default function UserList(){
    
    const columns = ['사용자ID','이름','이메일','전화번호', '생년월일', '주소']
    const [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:8080/user/list')
        .then(res=>{
            setData(res.data.users)
        })
        .catch(err=>{})
    },[])
    return(<>
       
        <h1>사용자 목록</h1>
        <div>
        <Table columns={columns} colspan={6} data = {data} ></Table> 
        </div>
        </>)
    
}