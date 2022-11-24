/*const supertest=require('supertest')
const request=supertest('http://localhost:3000/api/user/current')
curl -X 

it('test case1', async()=>{

   
   const responce=await request.get('auto/dashboard/table/3')
   console.log(responce.body);
   
   
})
*/

jest.setTimeout(50000);

const request = require('supertest')
const app = require('http://localhost:3000/api/user/current')
var token='';

//Test1
it('test1',async()=>{

  let user ={
    "username":"gohar350butt@gmail.com",
    "password":"Butt9604"
  }

  const responce =await request.post('api/session').send(user);
  expect(responce.status).toBe(200);
  token=responce.body.id;
  console.log(responce.body);
})

//Test2

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})