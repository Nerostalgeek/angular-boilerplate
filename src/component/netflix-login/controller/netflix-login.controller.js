import inject from 'ng-inject';

@inject('$state')
class NetflixLogin {
  constructor() {
    console.log('Hello, this is constructor of NetflixLogin component !');

    this.callMeMaybe(); // First call, init
  }

  callMeMaybe() {
    this.random = Math.random();
  }
}

export default NetflixLogin;
