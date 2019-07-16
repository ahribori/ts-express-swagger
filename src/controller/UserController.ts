import { GET, FormParam, Path, PathParam, POST, PUT, DELETE, PATCH } from 'typescript-rest';
import { Response, Tags } from 'typescript-rest-swagger';
import { User } from '../model/User';
import HttpException from '../exception/common/HttpException';

@Path('user')
class UserController {
  @Tags('User')
  @Response<User>(200, 'OK')
  @Response<HttpException>(401, 'Unauthorized')
  @GET
  getUsers(): string {
    return 'users';
  }

  @Path(':id')
  @Tags('User')
  @Response<User>(200, 'OK')
  @Response<HttpException>(401, 'Unauthorized')
  @GET
  getUser(@PathParam('id') id: string) {
    return `user${id}`;
  }

  @Tags('User')
  @Response<User>(200, 'OK')
  @Response<HttpException>(401, 'Unauthorized')
  @POST
  createUser(@FormParam('id') id: string) {
    console.log(id);
    return `user${id}`;
  }

  @Path(':id')
  @Tags('User')
  @Response<User>(200, 'OK')
  @Response<HttpException>(401, 'Unauthorized')
  @PUT
  updateUser(@PathParam('id') id: string) {
    console.log(id);
    return `user${id}`;
  }

  @Path(':id/active')
  @Tags('User')
  @Response<User>(200, 'OK')
  @Response<HttpException>(401, 'Unauthorized')
  @PATCH
  patchUser(@PathParam('id') id: string) {
    console.log('active');
    return `user${id}`;
  }

  @Path(':id')
  @Tags('User')
  @Response<User>(200, 'OK')
  @Response<HttpException>(401, 'Unauthorized')
  @DELETE
  deleteUser(@PathParam('id') id: string) {
    console.log(id);
    return `user${id}`;
  }

}
