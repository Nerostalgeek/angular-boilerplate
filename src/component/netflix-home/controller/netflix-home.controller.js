import inject from 'ng-inject';

@inject('$state')
class NetflixHome {
  constructor() {
    console.log('Hello, this is constructor of NetflixHome component !');

    this.message = 'Hello World ! This is NetflixHome component !';
  }
}

export default NetflixHome;
