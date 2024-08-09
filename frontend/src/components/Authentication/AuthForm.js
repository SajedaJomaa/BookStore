import {
  Form,
  NavLink,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import Input from '../Common/Input.js';
import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData();
  console.log(data);

  const { errors, messages } = data || {};
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.siteName}>Design Books</h1>

      </div>
      <Form method="post" className={classes.forAuth}>
        <h1>LogIn</h1>

        <div>
          {errors && Object.keys(errors).length > 0 ? (
            <ul>
              {Object.values(errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          ) : messages ? (
            <p>{messages}</p>
          ) : null}
        </div>
        
        <div className={classes.controlrow}>
          <div className={classes.control}>
            <Input
              label="Email"
              id="email"
              type="email"
              name="email"

            />
          </div>
          <div className={classes.control}>
            <Input
              label="Password"
              id="password"
              type="password"
              name="password"

            />
          </div>
        </div>
        <div className={classes.formactions}>


          <NavLink
            to="/signup"
            className={classes.signlink}
          >
            Signup
          </NavLink>

          <button
            className={classes.button}
            disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>

      </Form>
    </>
  );
}

export default AuthForm;
