/** @jsx createElement */
import { createElement, Fragment, Context } from "@bikeshaving/crank";
import { register, ErrorDetails } from '../../services/userService';
import { Errors } from "./Errors";
import page from 'page';
import { setUser, UserDetails } from '../../state/userState';

export function* RegistrationForm(this: Context) {
  let loading = false;
  let hasErrors = false;
  let response: UserDetails | ErrorDetails = {} as ErrorDetails;

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    (async () => {
      loading = true;
      hasErrors = false;
      response = {} as ErrorDetails;
      this.refresh();

      const formData = new FormData(event.target as HTMLFormElement);
      const resp = await register({
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string
      });

      hasErrors = resp.hasErrors;
      response = resp.response;
      if(hasErrors) {
        loading = false;
        this.refresh();
      }
      else {
        setUser(response as UserDetails);
        page('/');
      }
    })();
  };

  while (true) {
    yield (
      <div class="auth-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Sign up</h1>
              <p class="text-xs-center">
                <a href="/login">Have an account?</a>
              </p>

              {hasErrors && <Errors errors={response.errors}/>}

              <form onsubmit={handleSubmit}>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" name="username" placeholder="Your Name" />
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" name="email" placeholder="Email" />
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="password" name="password" placeholder="Password" />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right" disabled={loading}>
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}