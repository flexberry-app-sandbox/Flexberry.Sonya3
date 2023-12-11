docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sonya3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sonya3/app ../..
