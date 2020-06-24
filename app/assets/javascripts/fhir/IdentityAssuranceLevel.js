const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const IdentityAssuranceLevelSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'IdentityAssuranceLevel' },
});

class IdentityAssuranceLevel extends mongoose.Document {
  constructor(object) {
    super(object, IdentityAssuranceLevelSchema);
    this._type = 'FHIR::IdentityAssuranceLevel';
  }
};


module.exports.IdentityAssuranceLevelSchema = IdentityAssuranceLevelSchema;
module.exports.IdentityAssuranceLevel = IdentityAssuranceLevel;
