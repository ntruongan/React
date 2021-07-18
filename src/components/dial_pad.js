import React, {Component} from 'react';

class Dial extends Component{
  render(){
    return(
      <div class="container">
          <div class="row">
              <div class="col-md-4 col-md-offset-4 phone">
                  <div class="row1">
                      <div class="col-md-12">
                      <input type="tel" name="name" id="telNumber" class="form-control tel" value="" />
                          <div class="num-pad">
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      1
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      2 <span class="small">
                                          <p>
                                              ABC</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      3 <span class="small">
                                          <p>
                                              DEF</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      4 <span class="small">
                                          <p>
                                              GHI</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      5 <span class="small">
                                          <p>
                                              JKL</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      6 <span class="small">
                                          <p>
                                              MNO</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      7 <span class="small">
                                          <p>
                                              PQRS</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      8 <span class="small">
                                          <p>
                                              TUV</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      9 <span class="small">
                                          <p>
                                              WXYZ</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      *
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      0 <span class="small">
                                          <p>
                                              +</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="span4">
                              <div class="num">
                                  <div class="txt">
                                      #
                                  </div>
                              </div>
                          </div>
                          </div>
                          <div class="clearfix">
                          </div>
                              <a href="http://www.jquery2dotnet.com" class="btn btn-success btn-block flatbtn">CALL</a>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      );
  }
}


export default Dial;
