const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FlagStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'FlagStatus' },
});

class FlagStatus extends mongoose.Document {
  constructor(object) {
    super(object, FlagStatusSchema);
    this._type = 'FHIR::FlagStatus';
  }
};


module.exports.FlagStatusSchema = FlagStatusSchema;
module.exports.FlagStatus = FlagStatus;
