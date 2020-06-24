const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AllergyIntoleranceSeveritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AllergyIntoleranceSeverity' },
});

class AllergyIntoleranceSeverity extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceSeveritySchema);
    this._type = 'FHIR::AllergyIntoleranceSeverity';
  }
};


module.exports.AllergyIntoleranceSeveritySchema = AllergyIntoleranceSeveritySchema;
module.exports.AllergyIntoleranceSeverity = AllergyIntoleranceSeverity;
