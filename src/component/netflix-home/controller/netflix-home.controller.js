import inject from 'ng-inject';

@inject('$state')
class NetflixHome {
  message = 'Hello World ! This is NetflixHome component !';

  constructor() {
    console.log('Hello, this is constructor of NetflixHome component !');
  }
}

export default NetflixHome;
