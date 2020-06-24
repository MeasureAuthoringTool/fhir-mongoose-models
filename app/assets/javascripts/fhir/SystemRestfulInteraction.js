const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SystemRestfulInteractionSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SystemRestfulInteraction' },
});

class SystemRestfulInteraction extends mongoose.Document {
  constructor(object) {
    super(object, SystemRestfulInteractionSchema);
    this._type = 'FHIR::SystemRestfulInteraction';
  }
};


module.exports.SystemRestfulInteractionSchema = SystemRestfulInteractionSchema;
module.exports.SystemRestfulInteraction = SystemRestfulInteraction;
