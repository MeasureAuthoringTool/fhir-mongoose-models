const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RepositoryTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'RepositoryType' },
});

class RepositoryType extends mongoose.Document {
  constructor(object) {
    super(object, RepositoryTypeSchema);
    this._type = 'FHIR::RepositoryType';
  }
};


module.exports.RepositoryTypeSchema = RepositoryTypeSchema;
module.exports.RepositoryType = RepositoryType;
