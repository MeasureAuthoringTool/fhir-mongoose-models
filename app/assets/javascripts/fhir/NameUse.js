const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NameUseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'NameUse' },
});

class NameUse extends mongoose.Document {
  constructor(object) {
    super(object, NameUseSchema);
    this._type = 'FHIR::NameUse';
  }
};


module.exports.NameUseSchema = NameUseSchema;
module.exports.NameUse = NameUse;
