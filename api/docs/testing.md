# testing

tests are run in parallel with the help of `brianium/paratest` and use a sqlite DB, the `.env.testing` contains some settings used when tests are running.

tests need to extend `use Tests\TestCase;`, when you use a DB functionality you need to add `use Illuminate\Foundation\Testing\RefreshDatabase;` and inside the class `use RefreshDatabase;`
