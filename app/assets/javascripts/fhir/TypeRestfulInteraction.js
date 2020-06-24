const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TypeRestfulInteractionSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TypeRestfulInteraction' },
});

class TypeRestfulInteraction extends mongoose.Document {
  constructor(object) {
    super(object, TypeRestfulInteractionSchema);
    this._type = 'FHIR::TypeRestfulInteraction';
  }
};


module.exports.TypeRestfulInteractionSchema = TypeRestfulInteractionSchema;
module.exports.TypeRestfulInteraction = TypeRestfulInteraction;
