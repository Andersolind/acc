using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MBBVL.Startup))]
namespace MBBVL
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
