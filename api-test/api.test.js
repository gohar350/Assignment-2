const supertest=require('supertest')
const request=supertest('http://localhost:3000/collection/2-gohar-butt')

it('test case1',async done=>{

   const responce= await request.get('http://localhost:3000/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoxLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjJ9LCJ0eXBlIjoicXVlcnkifSwiZGlzcGxheSI6InRhYmxlIiwidmlzdWFsaXphdGlvbl9zZXR0aW5ncyI6e319')
   console.log(responce.body)
   
})