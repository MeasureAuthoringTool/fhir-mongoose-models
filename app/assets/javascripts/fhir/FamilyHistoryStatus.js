const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FamilyHistoryStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'FamilyHistoryStatus' },
});

class FamilyHistoryStatus extends mongoose.Document {
  constructor(object) {
    super(object, FamilyHistoryStatusSchema);
    this._type = 'FHIR::FamilyHistoryStatus';
  }
};


module.exports.FamilyHistoryStatusSchema = FamilyHistoryStatusSchema;
module.exports.FamilyHistoryStatus = FamilyHistoryStatus;
