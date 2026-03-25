const fetch = global.fetch;
const base='http://localhost:5000/api/tasks';
(async()=>{
 try {
 const c = await fetch(base,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:'Test Task'})});
 console.log('POST', c.status, await c.json());
 const all = await (await fetch(base)).json();
 console.log('GET all', all);
 const id = all[0] && all[0].id;
 console.log('id', id);
 const single = await (await fetch(`${base}/${id}`)).json();
 console.log('GET by id', single);
 const updResp = await fetch(`${base}/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:'Updated',completed:true})});
 console.log('PUT status', updResp.status, await updResp.json());
 const delResp = await fetch(`${base}/${id}`,{method:'DELETE'});
 console.log('DELETE status', delResp.status, await delResp.json());
 const postDel = await fetch(`${base}/${id}`);
 console.log('GET after delete status', postDel.status);
 } catch(err){
 console.error('error', err);
 }
})();