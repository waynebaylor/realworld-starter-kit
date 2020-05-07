/** @jsx createElement */
import { createElement, Context } from '@bikeshaving/crank';
import { Errors } from '../../components';
import { setUser, getUser } from '../../state/userState';
import { updateSettings, UserResp } from '../../services/userService';
import { UserDetails } from '../../types';
import { ErrorResp } from '../../services';

export function* SettingsForm(this: Context) {
  const user = getUser() as UserDetails;

  let loading = false;
  let hasErrors = false;
  let response;

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    (async () => {
      loading = true;
      hasErrors = false;
      response = undefined;

      this.refresh();

      const formData = new FormData(event.target as HTMLFormElement);
      const resp = await updateSettings({
        image: formData.get('image') as string,
        username: formData.get('username') as string,
        bio: formData.get('bio') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      });

      loading = false;
      hasErrors = resp.hasErrors;
      response = resp.response;
      if (!hasErrors) {
        setUser((response as UserResp).user);
      }

      this.refresh();
    })();
  };

  while (true) {
    yield (
      <div class="settings-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Your Settings</h1>

              {!hasErrors && response && <div class="alert alert-success">Settings saved.</div>}

              {hasErrors && response && <Errors errors={(response as ErrorResp).errors} />}

              <form onsubmit={handleSubmit}>
                <fieldset>
                  <fieldset class="form-group">
                    <input class="form-control" type="text" name="image" defaultValue={user.image} placeholder="URL of profile picture" />
                  </fieldset>
                  <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" name="username" defaultValue={user.username} placeholder="Your Name" />
                  </fieldset>
                  <fieldset class="form-group">
                    <textarea class="form-control form-control-lg" rows="8" name="bio" defaultValue={user.bio} placeholder="Short bio about you"></textarea>
                  </fieldset>
                  <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" name="email" defaultValue={user.email} placeholder="Email" />
                  </fieldset>
                  <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="password" name="password" placeholder="Password" />
                  </fieldset>
                  <button class="btn btn-lg btn-primary pull-xs-right" disabled={loading}>
                    Update Settings
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
