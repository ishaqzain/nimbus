$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "pictograph/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "pictograph"
  s.version     = Pictograph::VERSION
  s.authors     = ["Faisal Rahman"]
  s.email       = ["id.faisalrahman@gmail.com"]
  s.homepage    = "https://github.com/bukalapak/pictograph"
  s.summary     = "Bukalapak Icon Set"
  s.description = "Plugin for Bukalapak's icon assets"
  s.license     = "MIT"

  s.files = Dir["{lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
end
