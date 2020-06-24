const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContributorTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ContributorType' },
});

class ContributorType extends mongoose.Document {
  constructor(object) {
    super(object, ContributorTypeSchema);
    this._type = 'FHIR::ContributorType';
  }
};


module.exports.ContributorTypeSchema = ContributorTypeSchema;
module.exports.ContributorType = ContributorType;
