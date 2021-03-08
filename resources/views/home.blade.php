@extends('layouts.app')

@section('content')

  @include('section.header')
   
    <section class="bg-center py-0" id="about" style="background: url({{ asset('/img/service-bg.svg') }}) no-repeat; background-size: cover">
      @include('section.service')
      <section class="with-pattern-1" id="services">
        <div class="container">
          @include('section.vision')
          <div class="row align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h2>Make your own success as simple you clap</h2>
              <p class="text-muted">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation.</p>
              <ul class="list-check">
                <li class="text-muted mb-2">Various Analysis Options</li>
                <li class="text-muted mb-2">Page Load Details (time, size, number of requests)</li>
                <li class="text-muted mb-2">Waterfall, Video and Report History</li>
              </ul>
              <button class="btn btn-primary js-modal-btn" data-video-id="B6uuIHpFkuo"><i class="fas fa-play-circle mr-2"></i>Play video</button>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6 col-sm-6 mb-4">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-left px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#ff904e">
                        <use xlink:href="#document-saved-1"> </use>
                      </svg>
                      <h3 class="h5 font-weight-normal h4 my-3">Online Marketing</h3>
                      <p class="text-small mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 mb-4">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-left px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#39f8d2">
                        <use xlink:href="#map-marker-1"> </use>
                      </svg>
                      <h3 class="h5 font-weight-normal h4 my-3">Track your move </h3>
                      <p class="text-small mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 mb-4">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-left px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#8190ff">
                        <use xlink:href="#arrow-target-1"> </use>
                      </svg>
                      <h3 class="h5 font-weight-normal h4 my-3">Market analysis</h3>
                      <p class="text-small mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-left px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#ff634b">
                        <use xlink:href="#sorting-1"> </use>
                      </svg>
                      <h3 class="h5 font-weight-normal h4 my-3">Full Settings</h3>
                      <p class="text-small mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <a class="scropll-top-btn" id="scrollTop" href="#"><i class="fas fa-long-arrow-alt-up"></i></a>
   

@endsection
