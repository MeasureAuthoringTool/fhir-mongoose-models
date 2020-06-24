const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapTransformSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StructureMapTransform' },
});

class StructureMapTransform extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapTransformSchema);
    this._type = 'FHIR::StructureMapTransform';
  }
};


module.exports.StructureMapTransformSchema = StructureMapTransformSchema;
module.exports.StructureMapTransform = StructureMapTransform;
