const {
  SEQUELIZE_DIALECT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST
} = process.env;

module.exports = {
  dialect: SEQUELIZE_DIALECT,
  host: POSTGRES_HOST,
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  dialectOptions: {
    useUTC: false
  },
  timezone: "-03:00"
};
