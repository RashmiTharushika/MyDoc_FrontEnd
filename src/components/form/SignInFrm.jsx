import React from 'react';
import './signInFrm.css'

function signInFrm() {
  return (
    <div align="center">
      <div align="center" class="d1">
        <h1 >Sign In</h1>

            <form action="#">
            <table>
                <tr>
                    <td> Username:</td>
                    <td><input class="texta" type="text" name="user" /></td>
                </tr>
                <tr>
                    <td> Password:</td>
                    <td><input class="texta" type="password" name="password" /></td>
                </tr>
            </table>
            <br />
            <input class="button" type="submit" value="Sign In"/>
            <p>Don't have an account? Register here.</p>
            <p>Forgot Password?</p>
            <p>Retrieve Account.</p>
            </form>


      </div>
    </div>
  );
}

export default signInFrm;

