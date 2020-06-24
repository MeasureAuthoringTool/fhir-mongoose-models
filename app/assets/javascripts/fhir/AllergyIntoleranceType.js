const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AllergyIntoleranceTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AllergyIntoleranceType' },
});

class AllergyIntoleranceType extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceTypeSchema);
    this._type = 'FHIR::AllergyIntoleranceType';
  }
};


module.exports.AllergyIntoleranceTypeSchema = AllergyIntoleranceTypeSchema;
module.exports.AllergyIntoleranceType = AllergyIntoleranceType;
