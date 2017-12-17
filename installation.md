# Introduction
- [Requirement](#requirement)
- [Installation](#installation)
- [Note](#note)

<a name="requirement"></a>
## Requirement

**We recommend to use Ampps (https://www.ampps.com) instead of Xampp to create develop environment. With Ampps, you can easy to add/manage virtual domain like lara-mag.local https://www.youtube.com/watch?v=F1CaiR3L9FQ**

- Apache, nginx, or another compatible web server.
- PHP >= 7.0 >> Higher
- MySQL Database server
- OpenSSL PHP Extension
- Mbstring PHP Extension
- Exif PHP Extension
- Fileinfo Extension
- Module Re_write server
- PHP_CURL Module Enable


>  {warning} On this project, I use the latest Laravel version (currently 5.5). Please go to [Laravel documentation page](https://laravel.com/docs) for more information.

<a name="installation"></a>
## Installation

**- Import sample database from `database.sql`**

**- Create `.env` file from `.env-example` and update your configuration**

** - Run the first test with command `php artisan serve`. Open `http://localhost:8000`, you should see home page of LaraMag. **

**- LaraMag should run on a virtual host. Create a virtual host like lara-mag.local to run LaraMag. Follow these steps to see how to config virtual host: [Setup virtual host](/2.4/virtualhost).** 

<a name="note"></a>
## Note

This site can only be run at domain name, not folder link.

On your localhost, setting virtual host. Something like `http://lara-mag.local` is ok.

Cannot use as `http://localhost/lara-mag/...`.

Please remove `public` in your domain also, you can point your domain to `public` folder

or use `.httaccess` (http://stackoverflow.com/questions/23837933/how-can-i-remove-public-index-php-in-the-url-generated-laravel)

Follow these steps to see how to config virtual host: [Setup virtual host](/2.4/virtualhost).

Well done! Now, you can login to the dashboard by access to your_domain_site/admin.

    Username: botble
    Password: 159357

Enjoy!