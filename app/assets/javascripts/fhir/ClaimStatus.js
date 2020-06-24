const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ClaimStatus' },
});

class ClaimStatus extends mongoose.Document {
  constructor(object) {
    super(object, ClaimStatusSchema);
    this._type = 'FHIR::ClaimStatus';
  }
};


module.exports.ClaimStatusSchema = ClaimStatusSchema;
module.exports.ClaimStatus = ClaimStatus;
