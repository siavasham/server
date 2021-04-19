<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{ __('home.title') }}</title>    
    <meta name="description" content="{{ __('home.description') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    @if ($user->isRtl)
    <link rel="stylesheet" href="{{ asset(mix('css/bootstrap-rtl.min.css')) }}">
    @else
    <link rel="stylesheet" href="{{ asset(mix('css/bootstrap.min.css')) }}">
    @endif
    <link rel="stylesheet" href="{{ asset(mix('css/owl.carousel.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/owl.theme.default.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/device-mockups.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/style.default.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/custom.css')) }}">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="shortcut icon" href="{{ asset(mix('img/favicon.png')) }}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  </head>
  <body class = "{{$user->isRtl ? 'rtl':'' }} ">
      <div class="body-inner">
          
          @include('layouts.partials.header')

          @yield('content')

          @include('layouts.partials.footer')

      </div>


      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <script src="{{ asset(mix('/js/jquery.min.js')) }}"></script>
      <script src="{{ asset('/js/bootstrap.bundle.min.js') }}"></script>
      <script src="{{ asset('/js/owl.carousel.min.js') }}"></script>
      <script src="{{ asset('/js/front.js') }}"></script>
  </body>
</html>
