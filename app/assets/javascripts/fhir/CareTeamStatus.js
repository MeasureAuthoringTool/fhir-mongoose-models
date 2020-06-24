const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CareTeamStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CareTeamStatus' },
});

class CareTeamStatus extends mongoose.Document {
  constructor(object) {
    super(object, CareTeamStatusSchema);
    this._type = 'FHIR::CareTeamStatus';
  }
};


module.exports.CareTeamStatusSchema = CareTeamStatusSchema;
module.exports.CareTeamStatus = CareTeamStatus;
