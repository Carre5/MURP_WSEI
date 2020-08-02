using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WSEI_MURP_v1.Controllers
{
    [Route("/api/[controller]")]
    public class LoginController : Controller
    {
        //private readonly SignInManager<IdentityUser> signinManager;
        //private readonly UserManager<IdentityUser> userManager;

        public LoginController()
        {
            //this.userManager = userManager;
            //this.signinManager = signinManager
        }

        [HttpPost]
        public IActionResult Index()
        {
            return Login();
        }

        [HttpPost]
        private IActionResult Login()
        {
            /*
             if (!ModelState.IsValid)
            {
                return View();
            }

            var result = await signinManager.PasswordSignInAsync(
                login.UserName, login.Password, login.RememberMe, false);

            if(!result.Succeeded)
            {
                ModelState.AddModelError("", "Login error!");
                return View();
            }

            if (string.IsNullOrEmpty(returnUrl))
                return RedirectToAction("Index", "Company");

            return Redirect(returnUrl);
             */
            return null;
        }

        [HttpPost]
        public IActionResult Logout()
        {
            /*
            await signinManager.SignOutAsync();

            if (string.IsNullOrEmpty(returnUrl))
                return RedirectToAction("Index", "Home");

            return Redirect(returnUrl);
            */
            return null;
        }

        [HttpPost]
        public Task<IActionResult> Register()
        {
            /*
             if (!ModelState.IsValid)
                return View(RegisteredUser);
            var newUser = new IdentityUser
            {
                Email = RegisteredUser.EmailAddress,
                UserName = RegisteredUser.UserName
            };

            var result = await userManager.CreateAsync(newUser, RegisteredUser.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors.Select(x => x.Description))
                {
                    ModelState.AddModelError("", error);
                }
                return View();
            }

            return RedirectToAction("Login");
             */
            return null;
        }
    }
}
